<template>
    <div class="mb-[10px] content">
        <div class="flex justify-between items-center px-5 title">
            <p class="font-semibold">{{ title }}</p>
            <img class="cursor-pointer mr-2" src="@/assets/images/vector.svg" alt="" @click="handelTitleButton" v-if="titleButton">
        </div>
        <div class="px-5 py-3">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    titleButton: {
        type: Boolean,
        default: false
    },
    dragged: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["handelTitleButton", "showMore"]);

const handelTitleButton = () => {
    console.log('ok');
    emit("handelTitleButton");
}


</script>

<style lang="scss">
    .content{
        background: #FFFFFF;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px 0px 0px 8px;
        .title{
            height: 42px;
            border-bottom: 1px solid #E2E2E2;
        }
        @media (max-width: 640px) {
            border-radius: 8px 8px 8px 8px;
        }
    }
</style>