import React from 'react';

function CellSizeDesc() {
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
          <p className="lead">The distribution of numerous nuclei determines the classification of cells. Mild is the term used when the nuclei are concentrated in the lower part of the cell. It is classified as severe if it is at the top and as moderate if it is in the second half. This classification offers a more complex picture of the degree of elevated nucleoli presence.</p>
          <p>These features collectively suggest abnormal cellular growth and differentiation, which are hallmarks of cancer</p>
          <br />
          <figure><img src="https://i.postimg.cc/dtPP3f8Q/image.png" alt=""/>
              <figcaption></figcaption>
          </figure>
        </article>
      </div>
    </main>
  );
}

export default CellSizeDesc;
