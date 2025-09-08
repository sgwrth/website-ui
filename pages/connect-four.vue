<script setup lang="ts">
const postConnectFour = usePostConnectFour()

const gameData = ref()
const board: Ref<Array<Array<string>>> = ref(
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
)
const gameWon = ref(false)
const msg = ref()

function convertBoardSymbol(symbol: string): string {
    switch (symbol) {
    case ' ':
        return ' '
    case 'X':
        return 'X'
    case 'O':
        return 'O'
    default:
        return '?'
    }
}

async function makeMove(col: number) {
    console.log(`move: ${col}`)
    gameData.value.move = col
    gameData.value = await postConnectFour(gameData.value)
    board.value = gameData.value.board
    gameWon.value = gameData.value.game_won
    msg.value = gameData.value.msg
    console.log(`game won: ${gameWon.value}, msg: ${msg.value}`)
}

function setColor(symbol: string): string {
    switch (symbol) {
    case 'X':
        return '#ffe000'
    case 'O':
        return '#603040'
    default:
        return ''
    }
}

onMounted(async () => {
    gameData.value = await postConnectFour({'message': 'hi'})
    board.value = gameData.value.board
    gameWon.value = gameData.value.game_won
    msg.value = gameData.value.msg
})
</script>

<template>
    <div class="main">
        <div class="header">
            Connect Four
        </div>

        <div v-if="!gameWon" class="board">
            <!-- Loop is 1-indexed, hence the '[i - 1]'. -->
            <div class="col1" v-on:click="makeMove(0)">
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][0]),
                            color: setColor(board[i - 1][0])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][0]) }}</strong>
                </div>
            </div>
            <div class="col2" v-on:click="makeMove(1)">
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][1]),
                            color: setColor(board[i - 1][1])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][1]) }}</strong>
                </div>
            </div>
            <div class="col3" v-on:click="makeMove(2)">
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][2]),
                            color: setColor(board[i - 1][2])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][2]) }}</strong>
                </div>
            </div>
            <div class="col4" v-on:click="makeMove(3)">
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][3]),
                            color: setColor(board[i - 1][3])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][3]) }}</strong>
                </div>
            </div>
            <div class="col5" v-on:click="makeMove(4)">
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][4]),
                            color: setColor(board[i - 1][4])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][4]) }}</strong>
                </div>
            </div>
            <div class="col6" v-on:click="makeMove(5)">
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][5]),
                            color: setColor(board[i - 1][5])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][5]) }}</strong>
                </div>
            </div>
            <div class="col7" v-on:click="makeMove(6)">
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][6]),
                            color: setColor(board[i - 1][6])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][6]) }}</strong>
                </div>
            </div>
        </div>

        <div v-else class="board">
            <!-- Loop is 1-indexed, hence the '[i - 1]'. -->
            <div>
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][0]),
                            color: setColor(board[i - 1][0])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][0]) }}</strong>
                </div>
            </div>
            <div>
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][1]),
                            color: setColor(board[i - 1][1])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][1]) }}</strong>
                </div>
            </div>
            <div>
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][2]),
                            color: setColor(board[i - 1][2])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][2]) }}</strong>
                </div>
            </div>
            <div>
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][3]),
                            color: setColor(board[i - 1][3])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][3]) }}</strong>
                </div>
            </div>
            <div>
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][4]),
                            color: setColor(board[i - 1][4])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][4]) }}</strong>
                </div>
            </div>
            <div>
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][5]),
                            color: setColor(board[i - 1][5])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][5]) }}</strong>
                </div>
            </div>
            <div>
                <div v-for="i in 6"
                        :key="i"
                        :style="{
                            backgroundColor: setColor(board[i - 1][6]),
                            color: setColor(board[i - 1][6])
                        }"
                        class="cell">
                    <strong>{{ convertBoardSymbol(board[i - 1][6]) }}</strong>
                </div>
            </div>
        </div>

        <div class="mt-m" v-if="gameWon">
            {{ `${msg.toUpperCase()}!` }}
        </div>

    </div>
</template>

<style scoped>
.board {
    max-width: 400px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 6fr;
}
.cell {
    border: solid 1px #333;
    text-align: center;
    align-items: center;
    height: 3.0rem;
}
.col1:hover {
    background-color: #300000;
    cursor: pointer;
}
.col2:hover {
    background-color: #300000;
    cursor: pointer;
}
.col3:hover {
    background-color: #300000;
    cursor: pointer;
}
.col4:hover {
    background-color: #300000;
    cursor: pointer;
}
.col5:hover {
    background-color: #300000;
    cursor: pointer;
}
.col6:hover {
    background-color: #300000;
    cursor: pointer;
}
.col7:hover {
    background-color: #300000;
    cursor: pointer;
}
</style>
