<template>
    <div class="flex items-center rating-component" :style="largeIcon ? '--star-size: 18px' : '--star-size: 14px'">
        <ul class="flex items-center">
            <li v-for="(value, index) in ratingList" :key="index" class="relative mr-[4px] last:mr-0">
                <img src="@/assets/images/rating-blank-icon.svg" />
                <div class="filled-rating" :style="`width: ${value}%`">
                    <img src="@/assets/images/rating-icon-orange.svg" v-if="orange" />
                    <img src="@/assets/images/rating-icon.svg" v-else />
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const props = defineProps({
    ratingValue: {
        type: Number,
        default: 0
    },
    showValue: {
        type: Boolean,
        default: false
    },
    largeIcon: {
        type: Boolean,
        default: false
    },
    orange: {
        type: Boolean,
        default: false
    }
});

const ratingList = ref<any>([]);

const generateRating = (rating:number) => {
    let value = rating > 5 ? 5 : rating;
    let tail = value - parseInt(value.toString());
    let filledPart = parseInt(value.toString());
    let unfilledPart = 5 - filledPart - (tail > 0 ? 1 : 0);
    if(value && !isNaN(value)) {
        return ([...Array(filledPart)].map(() => 100)).concat(
            (tail > 0) ? [tail * 100] : []
        ).concat([...Array(unfilledPart)].map(() => 0));
    }
    return [...Array(5)].map(() => 100);
}

watchEffect(() => {
    ratingList.value = generateRating(props.ratingValue);
});

</script>

<style lang="scss">
    .rating-component {
        --star-size: 14px;
        ul {
            li {
                width: var(--star-size);
                height: var(--star-size);
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: var(--star-size);
                    height: var(--star-size);
                    min-width: var(--star-size);
                }
                .filled-rating {
                    position: relative;
                    width: 100%;
                    height: var(--star-size);
                    overflow: hidden;
                }
            }
        }
    }
</style>