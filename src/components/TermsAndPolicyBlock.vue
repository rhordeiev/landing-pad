<template>
  <section id="terms-and-policy" class="w-full flex justify-center my-3">
    <div class="w-content text-center font-gilroy text-xs">
      <router-link to="/terms-and-privacy" class="text-darkblue-service-line">
        Terms of Service
      </router-link>
      and
      <router-link to="/terms-and-privacy" class="text-darkblue-service-line">
        Privacy Policy.
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TermsAndPolicyBlock'
}
</script>

<style scoped></style>
