import React from 'react';

function NucleusSizeDesc() {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div>
                
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Abnormal Variation in cell size</h1>
          </header>
          <p className="lead">Abnormal variations in nucleus size and shape in histopathological cells can be indicative of various pathological conditions, including cancer.Hypertrophy refers to an increase in the size of the nucleus beyond normal limits.
In cancerous cells, nuclei often exhibit hypertrophy due to increased DNA content and abnormal cell proliferation.
These enlarged nuclei may appear hyperchromatic (darker staining) and irregularly shaped.</p>
          <p>These features collectively suggest abnormal nucleur growth and differentiation, which are hallmarks of cancer</p>
          <br />
          <figure><img src="https://i.postimg.cc/dtPP3f8Q/image.png" alt=""/>
              <figcaption></figcaption>
          </figure>
        </article>
      </div>
    </main>
  );
}

export default NucleusSizeDesc;
