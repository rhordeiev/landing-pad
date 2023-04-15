<template>
  <section id="intro">
    <div class="absolute w-full h-100vh z-10 bg-black opacity-35 rounded-b-lg"></div>
    <img
      src="../../assets/img/initial.png"
      alt="background"
      class="z-0 absolute w-full h-100vh object-cover rounded-b-lg"
    />
    <div class="w-full flex justify-center">
      <div class="w-content h-100vh flex justify-center z-10 flex-col">
        <div
          class="text-white text-2xl font-bold w-8/12 mb-3 tracking-wider sm:text-3xl md:w-4/12 xl:text-4xl"
        >
          Moving to Portugal?
        </div>
        <div
          class="w-100 text-white text-sm leading-6 sm:w-80 sm:text-base md:text-lg xl:text-xl md:w-80"
        >
          Let the experts of the ACK ecosystem handle your administrative headaches
        </div>
        <div>
          <router-link
            to="/#contacts"
            class="btn-action mt-8 h-10 w-full text-sm font-medium flex justify-center sm:w-48"
          >
            Help to emigrate
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroBlock'
}
</script>

<style scoped></style>
