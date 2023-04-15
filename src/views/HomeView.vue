<template>
  <intro-block></intro-block>
  <feedback-block></feedback-block>
  <services-block></services-block>
  <about-us-block></about-us-block>
  <team-block></team-block>
</template>

<script>
import IntroBlock from '@/components/home/IntroBlock.vue'
import FeedbackBlock from '@/components/home/FeedbackBlock.vue'
import ServicesBlock from '@/components/home/ServicesBlock.vue'
import AboutUsBlock from '@/components/home/AboutUsBlock.vue'
import TeamBlock from '@/components/home/TeamBlock.vue'

export default {
  name: 'HomeView',
  components: { TeamBlock, AboutUsBlock, ServicesBlock, FeedbackBlock, IntroBlock }
}
</script>

<style scoped></style>
