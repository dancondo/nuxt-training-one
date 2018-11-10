<template>
  <v-card>
    <v-layout
      row
      wrap>
      <v-flex
        xs12
        sm3
        order-sm2>
        <v-img
          v-if="post.file.url"
          :src="post.file.url"
          width="100%"
          position="top"/>
      </v-flex>
      <v-flex
        xs12
        sm9>
        <v-card-text>
          <h5 class="display-1 mb-3">
            {{ post.title }}
          </h5>
          <p
            class="title font-weight-light text-xs-justify"
            style="white-space: pre-line;">
            {{ post.content }}
          </p>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
  export default{
    props: {
      post: {
        type: Object,
        default: () => {
          return {
            title: null,
            content: null,
            createdAt: null,
            file: null,
            author: null
          }
        }
      }
    },
  };

</script>
