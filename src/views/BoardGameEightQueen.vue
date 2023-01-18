<template>
    <main class="w-full text-white text-center">
        <header class="mb-5">
            <section>
                遊戲方式 : 請將所有皇后放進棋盤中，並且每個皇后都不能互相攻擊
            </section>
        </header>
        <section class="mb-5">
            <div>
                <label for="">選擇棋盤Size</label>
                <select class="text-black" v-model="boardSelectData.borderSize">
                    <option
                        v-for="option in boardSelectData.options" :key="option.value"
                        :value="option.value"
                    >{{ option.text }}</option>
                </select>
            </div>
            <div>
                是否開啟提示?
                <input type="radio" id="openHint" :value="true" v-model="openHint">
                <label for="openHint">是</label>
                <input type="radio" id="openHint" :value="false" v-model="openHint">
                <label for="openHint">否</label>
                <p v-if="openHint" class="text-orange-300">提示的是皇后攻擊範圍，在其攻擊範圍內，有其他皇后的話，表示不能放在該位置</p>
            </div>
        </section>
        <Board :size="boardSelectData.borderSize" :open-hint="openHint"/>
    </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Board from '@/components/BoardGame/Board.vue'
const boardMinSize = 4
const boardMaxSize = 8
const boardSelectData = ref({
    borderSize:4, //選中的值
    options:[
        { text:'4 X 4', value:4 },
        { text:'5 X 5', value:5 },
        { text:'6 X 6', value:6 },
        { text:'7 X 7', value:7 },
        { text:'8 X 8', value:8 },
    ]
})
const openHint = ref(false)


</script>