import { html } from '@hyperspan/html';
import { hyperspanScriptTags, hyperspanStyleTags } from '@hyperspan/framework/assets';

export default function MarketingLayout({ title, content }: { title: string; content: any }) {
  return html`
    <!doctype html>
    <html class="w-full h-full" lang="en" data-theme="lofi">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📎</text></svg>"
        />
        <title>${title}</title>
        ${hyperspanStyleTags()}
      </head>
      <body class="bg-base-200 min-h-screen">
        ${hyperspanScriptTags()}

        <!-- Mobile menu overlay -->
        <div
          id="mobile-overlay"
          class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden lg:hidden"
        ></div>

        <!-- Container for centering on larger screens -->
        <div class="max-w-6xl mx-auto bg-white shadow-lg min-h-screen">
          <!-- Mobile header -->
          <header
            class="lg:hidden bg-white border-b border-warm-brown/20 px-4 py-3 flex items-center justify-between"
          >
            <h1 class="text-xl font-bold text-warm-brown">Your Brand</h1>
            <button
              id="mobile-menu-btn"
              class="p-2 rounded-md hover:bg-warm-beige transition-colors"
            >
              <svg
                class="w-6 h-6 text-warm-brown"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </header>

          <div class="flex">
            <aside
              id="sidebar"
              class="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-warm-beige to-stone-100 border-r border-warm-brown/20 transform -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0"
            >
              <!-- Sidebar header -->
              <div
                class="flex items-center justify-between h-16 px-6 border-b border-warm-brown/20"
              >
                <h1 class="text-xl font-bold text-warm-brown">StrFu.com</h1>
                <button
                  id="close-sidebar"
                  class="lg:hidden p-1 rounded-md hover:bg-warm-brown/10 transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-warm-brown"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <!-- Navigation -->
              <nav class="">
                <ul class="menu w-full">
                  <li class="menu-title text-base-content">Randomness</li>
                  <li><a href="/str/random">Random String</a></li>
                  <li><a href="/str/uuid">Random UUID</a></li>
                </ul>
                <ul class="menu w-full border-t border-black">
                  <li class="menu-title text-base-content">String Operations</li>
                  <li><a href="/str/trim">Trim String</a></li>
                  <li><a href="/str/truncate">Truncate String</a></li>
                  <li><a href="/str/reverse">Reverse String</a></li>
                  <li><a href="/str/capitalize">Capitalize String</a></li>
                  <li><a href="/str/lowercase">Lowercase String</a></li>
                  <li><a href="/str/uppercase">Uppercase String</a></li>
                </ul>
                <ul class="menu w-full border-t border-black">
                  <li class="menu-title text-base-content">Hashing</li>
                  <li><a href="/str/hash-md5">MD5 Hash</a></li>
                  <li><a href="/str/hash-sha1">SHA1 Hash</a></li>
                  <li><a href="/str/hash-sha256">SHA256 Hash</a></li>
                  <li><a href="/str/hash-sha512">SHA512 Hash</a></li>
                </ul>
                <ul class="menu w-full border-t border-black">
                  <li class="menu-title text-base-content">Encryption</li>
                  <li><a href="/str/encrypt">Encrypt String</a></li>
                  <li><a href="/str/decrypt">Decrypt String</a></li>
                </ul>
              </nav>
            </aside>

            <!-- content -->
            <div class="mx-auto flex-1">${content}</div>
          </div>

          <footer
            class="footer sm:footer-horizontal footer-center bg-base-200 text-base-content py-10 border-t border-b border-black text-sm"
          >
            <aside>
              <p>
                Copyright &copy; ${new Date().getFullYear()} - All rights reserved. A service of
                <a href="https://vancelucas.com">Vance Lucas</a>.
              </p>
              <p>Powered by <a href="https://hyperspan.dev">Hyperspan</a>.</p>
            </aside>
          </footer>
        </div>
        <script>
          // Mobile menu functionality
          const mobileMenuBtn = document.getElementById('mobile-menu-btn');
          const closeSidebarBtn = document.getElementById('close-sidebar');
          const sidebar = document.getElementById('sidebar');
          const overlay = document.getElementById('mobile-overlay');

          function openSidebar() {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
          }

          function closeSidebar() {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
          }

          mobileMenuBtn.addEventListener('click', openSidebar);
          closeSidebarBtn.addEventListener('click', closeSidebar);
          overlay.addEventListener('click', closeSidebar);

          // Close sidebar when clicking outside on mobile
          document.addEventListener('click', function (event) {
            if (window.innerWidth < 1024) {
              if (!sidebar.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                closeSidebar();
              }
            }
          });

          // Handle window resize
          window.addEventListener('resize', function () {
            if (window.innerWidth >= 1024) {
              closeSidebar();
            }
          });
        </script>
      </body>
    </html>
  `;
}
