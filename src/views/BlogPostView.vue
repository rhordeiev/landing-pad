<template>
  <section id="blog-post" class="w-full flex justify-center overflow-hidden">
    <div
      class="w-40 h-40 absolute bg-lightblue-bg -top-10 -right-0 rounded-full blur-2xl -z-10 md:w-64 md:h-64"
    ></div>
    <div class="w-content main-top-offset">
      <router-link
        to="/blog"
        class="flex items-center"
        @mouseover="onBackHover"
        @mouseout="onBackOut"
      >
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 md:h-4"
        >
          <path
            d="M10 17L2 8.72414L10 1"
            stroke="#0F0F10"
            stroke-width="2"
            stroke-linecap="round"
            class="transition"
            ref="backIcon"
          />
        </svg>
        <span class="ml-2 font-raleway text-xs transitionmd:text-sm" ref="backText">
          Back to articles
        </span>
      </router-link>
      <div class="w-100 my-8">
        <div class="text-3xl mb-4 md:text-4xl">Oftentimes our clients find.</div>
        <div class="text-lightgray text-xs my-3 md:text-sm">Jun 12, 2022</div>
        <div class="w-full" v-for="n in 2" :key="`post-${n}`">
          <img
            :src="getBlogImage(`blog-picture-1-${n}.png`)"
            alt="Blog picture"
            class="w-full h-60 object-cover rounded-2xl md:h-80"
          />
          <p class="w-full my-4 text-sm md:text-base">
            House prices in Lisbon, Cascais and other selected areas of Portigal have grown annually
            in double digits over the last five years. Nevertheless, Lisbon is still Western
            Europe’s second cheapest capital city. This has led to exceptional returns from
            investments in tourism, residential, commercial and agriculture. Our network can offer
            you access to a wide array of proprietary opportunities.
          </p>
          <p class="w-full my-4 text-sm md:text-base">
            For existing investments, our management team will handle the daily tasks, including
            monitoring, producing investment reports, financial updates and attending shareholder
            meetings
          </p>
          <p class="w-full my-4 text-sm md:text-base">
            Thinking about an investment property in Portugal? Our dedicated team assists in the
            many duties of property management which extend to addressing issues with short term
            properties (airbnb and alojamento local sites), long term rental agreements, utility
            contracts and attending condominium meetings. If any problem pops up, our team is ready
            to assist you as they work closely with reliable suppliers
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPostView',
  methods: {
    getBlogImage(filename) {
      return new URL(`../assets/img/blog/${filename}`, import.meta.url)
    },
    onBackHover() {
      this.$refs.backIcon.classList.add('stroke-darkblue')
      this.$refs.backIcon.classList.remove('stroke-black')
      this.$refs.backText.classList.add('text-darkblue')
      this.$refs.backText.classList.remove('text-black')
    },
    onBackOut() {
      this.$refs.backIcon.classList.remove('stroke-darkblue')
      this.$refs.backIcon.classList.add('stroke-black')
      this.$refs.backText.classList.remove('text-darkblue')
      this.$refs.backText.classList.add('text-black')
    }
  }
}
</script>

<style scoped></style>
