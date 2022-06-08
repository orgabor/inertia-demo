<template>
    <div class="border-b border-gray-100">
        <Link href="/users" class="text-bule-500 hover:underline">Back</Link>
    </div>
    <div class="mt-4">
        <h1 class="text-2xl font-bold">{{ user.data.name }}</h1>
        <div class="mt-2">{{ user.data.email }}</div>
        <div class="mt-2">Regiestered: {{ user.data.created_at }}</div>
    </div>
</template>
<script setup>
defineProps({user: Object});
</script>
