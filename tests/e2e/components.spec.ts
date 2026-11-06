import { expect, test } from '@playwright/test'

const CHAPTER_2 = 'guide/00-common/02-why-it-matters.html'

test('a quiz shows the result after a pick and can be retried', async ({ page }) => {
  await page.goto(CHAPTER_2)
  const quiz = page.locator('.qz').first()
  await expect(quiz.locator('.qz-explain')).toHaveCount(0)
  await quiz.locator('.qz-choices button').first().click()
  await expect(quiz.locator('.qz-explain')).toBeVisible()
  await expect(quiz.locator('.qz-choices button.right')).toHaveCount(1)
  await quiz.locator('.qz-retry').click()
  await expect(quiz.locator('.qz-explain')).toHaveCount(0)
  await expect(quiz.locator('.qz-choices button').first()).toBeEnabled()
})

test('marking a chapter as read survives a reload', async ({ page }) => {
  await page.goto(CHAPTER_2)
  const done = page.locator('.cd')
  await expect(done).not.toHaveClass(/done/)
  await done.locator('button').first().click()
  await expect(done).toHaveClass(/done/)
  await page.reload()
  await expect(page.locator('.cd')).toHaveClass(/done/)
})

test('the prompt builder fills a sample and switches format', async ({ page }) => {
  await page.goto('guide/00-common/07-structured-prompts.html')
  const builder = page.locator('.pb')
  await expect(builder.locator('.pb-copy')).toBeDisabled()
  await builder.locator('.pb-actions button').first().click()
  await expect(builder.locator('.pb-copy')).toBeEnabled()
  const output = builder.locator('.pb-output')
  await expect(output).toContainText('<')
  await builder.locator('.pb-modes button').nth(1).click()
  await expect(output).toContainText('##')
})

test('the exam starts and lists its questions', async ({ page }) => {
  await page.goto('guide/00-common/certificate.html')
  await page.locator('.ce-primary').click()
  await expect(page.locator('.ce-q').first()).toBeVisible()
  expect(await page.locator('.ce-q').count()).toBeGreaterThan(1)
})

test('translated pages carry the AI translation notice, Korean pages do not', async ({ page }) => {
  await page.goto(`en/${CHAPTER_2}`)
  await expect(page.locator('.translation-notice')).toBeVisible()
  await page.goto(CHAPTER_2)
  await expect(page.locator('.translation-notice')).toHaveCount(0)
})

test('the language menu on an untranslated page leads to that language, not a 404', async ({ page }) => {
  await page.goto('guide/23-claude-code-cli/04-first-session.html')
  await page.locator('.VPNavBarTranslations a[href*="/en/guide/"]').evaluate((a: HTMLElement) => a.click())
  await expect(page).toHaveURL(/\/en\/guide\/$/)
  await expect(page.locator('.NotFound')).toHaveCount(0)
})

test('the favicon loads', async ({ page, request }) => {
  await page.goto('')
  const href = await page.locator('link[rel="icon"]').getAttribute('href')
  expect(href).toBe('/hello-llm/favicon.svg')
  expect((await request.get(href!)).status()).toBe(200)
})
