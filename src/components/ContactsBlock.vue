<template>
  <section id="contacts" class="w-full flex justify-center my-16">
    <div class="w-content flex flex-col items-center justify-center">
      <h2 class="text-4xl font-medium flex md:text-5xl">
        Contacts
        <svg
          width="30"
          height="30"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="relative bottom-1 right-1"
        >
          <path
            d="M18.6337 36.8516C22.7921 36.8516 30.0693 36.5084 37 36.5084M12.396 27.5869L26.9505 9.74372M2 24.4986C2 23.4006 2 8.94306 2 1.85156"
            stroke="#0F38B4"
            stroke-width="3.46535"
            stroke-linecap="round"
          />
        </svg>
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-7 my-7">
        <div class="contacts-block">
          <img src="../assets/img/contacts/mail.svg" alt="mail" />
          <div class="contacts-divider"></div>
          <a href="mailto:ackecosystem@gmail.com" class="contacts-link">ackecosystem@gmail.com</a>
        </div>
        <div class="contacts-block">
          <img src="../assets/img/contacts/phone.svg" alt="phone" />
          <div class="contacts-divider"></div>
          <a href="tel:+1884654458" class="contacts-link">+1 884 65 44 58</a>
        </div>
        <div class="contacts-block">
          <img src="../assets/img/contacts/social.svg" alt="socials" />
          <div class="contacts-divider"></div>
          <div class="grid grid-cols-3 gap-7">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="contacts-image-link"
              @mouseover="onSocialsHover('instagramLinkHoverEffect')"
              @mouseout="onSocialsOut('instagramLinkHoverEffect')"
            >
              <img src="../assets/img/contacts/instagram.svg" alt="instagram" />
              <img
                src="../assets/img/contacts/socials-hover.svg"
                alt="socials hover"
                class="absolute -bottom-4 transition-transform scale-0"
                ref="instagramLinkHoverEffect"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="contacts-image-link"
              @mouseover="onSocialsHover('facebookLinkHoverEffect')"
              @mouseout="onSocialsOut('facebookLinkHoverEffect')"
            >
              <img src="../assets/img/contacts/facebook.svg" alt="facebook" />
              <img
                src="../assets/img/contacts/socials-hover.svg"
                alt="socials hover"
                class="absolute -bottom-4 transition-transform scale-0"
                ref="facebookLinkHoverEffect"
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              class="contacts-image-link"
              @mouseover="onSocialsHover('linkedinLinkHoverEffect')"
              @mouseout="onSocialsOut('linkedinLinkHoverEffect')"
            >
              <img src="../assets/img/contacts/linkedin.svg" alt="linkedin" />
              <img
                src="../assets/img/contacts/socials-hover.svg"
                alt="socials hover"
                class="absolute -bottom-4 transition-transform scale-0"
                ref="linkedinLinkHoverEffect"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactsBlock',
  methods: {
    onSocialsHover(refName) {
      this.$refs[refName].classList.add('scale-100')
      this.$refs[refName].classList.remove('scale-0')
    },
    onSocialsOut(refName) {
      this.$refs[refName].classList.remove('scale-100')
      this.$refs[refName].classList.add('scale-0')
    }
  }
}
</script>

<style scoped></style>
