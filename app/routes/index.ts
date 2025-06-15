import { html } from '@hyperspan/html';
import { createRoute } from '@hyperspan/framework';
import MarketingLayout from '@/app/layouts/marketing-layout';

export default createRoute(() => {
  const content = html`
    <main class="w-full mt-10">
      <div class="p-10">
        <h1 class="text-5xl font-bold">Online String Functions &amp; Operations</h1>
        <p class="py-6">
          StrFu.com is a collection of string functions that you can use to manipulate strings.
        </p>
      </div>
    </main>
  `;

  return MarketingLayout({
    title: 'StrFu - Online String Functions & Operations',
    content,
  });
});
