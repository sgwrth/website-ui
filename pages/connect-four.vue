<script setup lang="ts">
const postConnectFour = usePostConnectFour()

const playerNameInput = ref()
const playerName = ref()
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

function assignPlayerName() {
    playerName.value = playerNameInput.value
}

function convertBoardSymbol(symbol: string): string {
    switch (symbol) {
    case ' ':
        return ' '
    case 'X':
        return 'X'
    case 'O':
        return 'O'
    default:
        return ' '
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

async function initGame() {
    gameData.value = await postConnectFour({'message': 'hi'})
    board.value = gameData.value.board
    gameWon.value = gameData.value.game_won
    msg.value = gameData.value.msg
}

onMounted(async () => {
    initGame()
})
</script>

<template>
    <div class="main">
        <div class="header">
            Connect Four
        </div>

        <div v-if="playerName === undefined">
            <div><label for="enterName">Enter your name</label></div>
            <div class="mb-m">
                <input v-model="playerNameInput" id="enterName" />
                <button class="ml-m" v-on:click="assignPlayerName">Send</button>
            </div>
        </div>

        <div v-if="!gameWon && playerName !== undefined" class="board">
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

        <div v-if="gameWon" class="mt-m">
            <div v-if="msg === 'player has won'">
                {{ `Good job, ${playerName}, you have won!` }}
            </div>
            <div v-else>
                {{ `Sorry, ${playerName}, you have lost!&nbsp;&nbsp;Better
                luck next time!` }}
            </div>
            <button class="mt-m" v-on:click="initGame">Play again</button>
        </div>

        <div class="header mt-l">About this</div>
        <div class="paragraph">
            The game is running on a separate Python WSGI server.&nbsp;&nbsp;
            Originally conceived as a game for the terminal, I added the option
            to play it via HTTP requests.&nbsp;&nbsp;The entire game data (the
            board, the number of moves left, etc.) is being sent back and forth
            with each turn.&nbsp;&nbsp;Backend and Frontend process the game data
            and return an updated board.&nbsp;&nbsp;Therefore, the game is entirely
            stateless on both ends.
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
