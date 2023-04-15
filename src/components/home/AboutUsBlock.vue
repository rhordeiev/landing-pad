<template>
  <section id="about-us" class="my-20 about-us-block-height w-full flex justify-center">
    <div class="absolute w-full about-us-block-height z-10 bg-black opacity-40"></div>
    <img
      src="../../assets/img/story.png"
      alt="background"
      class="z-0 absolute w-full about-us-block-height object-cover"
    />
    <div class="w-content h-full flex flex-col justify-center items-center z-10">
      <h2 class="text-4xl text-white font-medium flex mb-7 md:text-5xl">
        Our Story
        <svg
          width="30"
          height="30"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="relative bottom-1 right-0"
        >
          <path
            d="M18.6337 36.8516C22.7921 36.8516 30.0693 36.5084 37 36.5084M12.396 27.5869L26.9505 9.74372M2 24.4986C2 23.4006 2 8.94306 2 1.85156"
            stroke="#FFFFFF"
            stroke-width="3.46535"
            stroke-linecap="round"
          />
        </svg>
      </h2>
      <p class="story-text">
        We can help you reimagine your business through a digital lens. Our software engineering
        heritage combined with our strategic business and innovation consulting, design thinking,
        and physical-digital capabilities provide real business value to our customers through
        human-centric innovation.
      </p>
      <p class="story-text">
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look
        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
        sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUsBlock'
}
</script>

<style scoped></style>
