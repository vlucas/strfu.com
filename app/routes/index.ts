import { html } from '@hyperspan/html';
import { createRoute } from '@hyperspan/framework';
import MarketingLayout from '@/app/layouts/marketing-layout';

export default createRoute(() => {
  const content = html`
    <main class="w-full mt-10">
      <div class="hero bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-xl">
            <h1 class="text-5xl font-bold">StrFu.com</h1>
            <h2 class="text-3xl font-bold">String Functions &amp; Operations</h2>
            <p class="py-6">
              StrFu.com is a collection of string functions that you can use to manipulate strings.
            </p>
          </div>
        </div>
      </div>
    </main>
  `;

  return MarketingLayout({
    title: 'Homepage',
    content,
  });
});
