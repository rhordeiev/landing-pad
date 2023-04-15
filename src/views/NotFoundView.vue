<template>
  <section id="not-found">
    <div class="absolute w-full h-100vh z-10 bg-black opacity-50"></div>
    <img
      src="../assets/img/not-found.png"
      alt="background"
      class="z-0 absolute w-full h-100vh object-cover rounded-b-lg"
    />
    <div class="w-full flex justify-center">
      <div class="w-content h-100vh flex justify-center items-center z-10 flex-col">
        <h2 class="text-4xl text-white font-medium flex whitespace-pre my-2 md:text-5xl">
          <svg
            width="40"
            height="40"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="-rotate-90 relative bottom-5 left-3"
          >
            <path
              d="M18.6337 36.8516C22.7921 36.8516 30.0693 36.5084 37 36.5084M12.396 27.5869L26.9505 9.74372M2 24.4986C2 23.4006 2 8.94306 2 1.85156"
              stroke="#2967F0"
              stroke-width="3.46535"
              stroke-linecap="round"
            />
          </svg>
          Oops!
        </h2>
        <div class="text-white text-sm leading-6 text-center md:text-base">
          It looks like something went wrong
        </div>
        <div class="text-white text-sm leading-6 text-center md:text-base">
          Reload the page or return to the home screen
        </div>
        <div>
          <router-link
            to="/"
            class="btn-action mt-8 h-10 w-48 text-sm font-medium flex justify-center"
          >
            Go to main page
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped></style>
