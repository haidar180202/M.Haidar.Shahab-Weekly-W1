import React from 'react'

const Contact = () => {
  return (
    // <!-- Contact Section Start -->
    <section id="contact" class="pt-36 pb-32 dark:bg-slate-800">
      <div class="container">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 max-w-xl text-center">
            <h4 class="mb-2 text-lg font-semibold text-primary">Contact</h4>
            <h2 class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Contact us</h2>
            <p class="text-md font-medium text-secondary md:text-lg">If you have questions about my profile and want to give me a message send with this to confirm all about me</p>
          </div>
        </div>

        <form>
          <div class="w-full lg:mx-auto lg:w-2/3">
            <div class="mb-8 w-full px-4">
              <label for="name" class="text-base font-bold text-primary">Nama</label>
              <input type="text" id="name" class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div class="mb-8 w-full px-4">
              <label for="email" class="text-base font-bold text-primary">Email</label>
              <input type="email" id="email" class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div class="mb-8 w-full px-4">
              <label for="message" class="text-base font-bold text-primary">Pesan</label>
              <textarea type="email" id="email" class="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
            </div>
            <div class="w-full px-4">
              <button class="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">Kirim</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    // <!-- Contact Section End -->

  )
}

export default Contact