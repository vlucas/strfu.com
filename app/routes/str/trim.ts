import { html } from '@hyperspan/html';
import { createRoute } from '@hyperspan/framework';
import MarketingLayout from '@/app/layouts/marketing-layout';

export default createRoute(() => {
  const content = html`
    <main class="w-full mt-10">
      <div class="p-10 prose">
        <h1>Trim String</h1>
        <p>Trim a string by removing whitespace from the beginning and end.</p>
        <form id="trim-form">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Input</legend>
            <textarea
              name="input"
              class="textarea textarea-bordered w-full h-24"
              rows="4"
            ></textarea>
          </fieldset>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Output</legend>
            <textarea
              name="output"
              class="textarea textarea-bordered w-full h-24"
              rows="4"
              readonly
              disabled
            ></textarea>
          </fieldset>

          <details class="py-2">
            <summary class="">Options</summary>
            <div class="">
              <fieldset class="fieldset">
                <div class="form-control">
                  <label class="label">
                    <input type="checkbox" name="options[unicode]" class="checkbox" checked />
                    Replace Unicode Whitespace With Space
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <input type="checkbox" name="options[no_unicode]" class="checkbox" />
                    Remove All Unicode Characters
                  </label>
                </div>
              </fieldset>
            </div>
          </details>

          <button type="submit" class="btn btn-primary">Trim String</button>
        </form>
        <script>
          document.getElementById('trim-form').addEventListener('submit', (e) => {
            e.preventDefault();
            trimString(e.target);
          });

          function trimString(formElement) {
            const formData = new FormData(formElement);
            const input = formData.get('input');
            const unicode = formData.get('options[unicode]') === 'on' ? true : false;
            const no_unicode = formData.get('options[no_unicode]') === 'on' ? true : false;

            if (input) {
              let output = input.trim();
              if (unicode) {
                output = output.replace(/s+/g, ' ');
              }
              if (no_unicode) {
                output = output.replace(/[^ -~]/g, '');
              }
              formElement.output.disabled = false;
              formElement.output.value = output;
            }
          }
        </script>
      </div>
    </main>
  `;

  return MarketingLayout({
    title: 'Trim String - StrFu.com',
    content,
  });
});
