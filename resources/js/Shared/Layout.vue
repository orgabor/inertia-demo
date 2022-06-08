<template>
    <section class="p-6 bg-gray-200 ">
        <header class="flex justify-between">
            <h1 class="font-bold text-lg">
                My App
            </h1>
            <p class="text-sm ml 4">
                Welcome back <span class="font-bold">{{ username }}</span>
            </p>
            <Nav />
        </header>

    </section>
    <section class="p-6">
        <div class="max-w-4xl mx-auto">
            <slot />
        </div>
    </section>
</template>
<script>
import { Head } from "@inertiajs/inertia-vue3";
import Nav  from './Nav'

export default {
    components: { Nav, Head },

    computed: {
    username() {
       return this.$page.props.auth.username
    }
    }
}
</script>
