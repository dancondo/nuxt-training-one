<template>
  <div>
    <banner />
    <v-container>
      <v-layout
        row
        wrap
      >
        <post-preview
          v-for="n in 3"
          :id="n"
          :key="n"
        />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import banner from '~/components/landing/banner'
import postPreview from '~/components/posts/preview.vue'
export default {
  layout: 'landing',
  components: {
    banner,
    postPreview
  }
};
</script>
