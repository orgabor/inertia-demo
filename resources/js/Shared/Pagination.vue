<template>
  <div>
    <Component
      :is="link.url ? 'Link' : 'span'"
      v-for="(link, index) in links"
      :href="link.url"
      v-html="link.label"
      class="px-1"
      :class="{ 'text-gray-500': ! link.url, 'font-bold' : link.active }"
      :key="index"
    />
  </div>
</template>

<script setup>
defineProps({links: Array});
</script>
