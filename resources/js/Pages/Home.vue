<template>
  <Head title="Home" />
  <h1 class="text-3xl">Home</h1>

  <Highlight :code="snippet" />
</template>
<script setup>
import Highlight from "@/Components/Highlight"
let snippet = `
class Example
            {
                public function __construct()
                {
                    //
                }
            }
`.trim()
</script>

