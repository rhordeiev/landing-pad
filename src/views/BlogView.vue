<template>
  <section id="blog" class="w-full flex justify-center relative overflow-hidden">
    <div
      class="w-64 h-64 absolute bg-lightblue-bg -top-10 -right-0 rounded-full blur-2xl -z-10"
    ></div>
    <div class="w-content main-top-offset">
      <h2 class="text-4xl font-medium flex md:text-4xl">
        Blog
        <svg
          width="30"
          height="30"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="relative bottom-2 right-1"
        >
          <path
            d="M18.6337 36.8516C22.7921 36.8516 30.0693 36.5084 37 36.5084M12.396 27.5869L26.9505 9.74372M2 24.4986C2 23.4006 2 8.94306 2 1.85156"
            stroke="#2967F0"
            stroke-width="3.46535"
            stroke-linecap="round"
          />
        </svg>
      </h2>
      <div class="w-full flex flex-col my-2">
        <router-link
          :to="`/blog/${blogPost.id}`"
          v-for="blogPost in blogPosts"
          :key="blogPost.id"
          class="w-full flex flex-col my-2 shadow-service rounded-2xl overflow-hidden p-3"
        >
          <div class="overflow-hidden rounded-2xl">
            <img
              :src="getBlogImage(blogPost.img)"
              alt="Blog picture"
              class="w-full h-60 object-cover transition-transform duration-500 hover:scale-110 md:h-80"
            />
          </div>
          <div class="text-base font-medium mt-2 transition hover:text-darkblue sm:text-lg">
            {{ blogPost.header }}
          </div>
          <div class="text-lightgray text-xs my-1 sm:text-sm">{{ blogPost.date }}</div>
          <div class="text-xs line-clamp-5 md:line-clamp-2 sm:text-sm">
            {{ blogPost.text }}
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogView',
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  },
  methods: {
    getBlogImage(filename) {
      return new URL(`../assets/img/blog/${filename}`, import.meta.url)
    }
  }
}
</script>

<style scoped></style>
