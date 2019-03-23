<template>
    <div>
        <div id="thought">
            <div class="title">{{ thought.title }}</div>
            <div class="content">{{ thought.content }}</div>
            <div class="date">{{ stampToDate(thought.date) }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Thought',
    props: ['thought'],
    methods: {
        stampToDate: timestamp => {
            const date = new Date(timestamp)
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }
    }
}
</script>

<style lang="scss" scoped>
#thought {
    display: flex;
    flex-direction: column;
    border: 1px solid #fff;
    background-color: #FD795B;
    width: 250px;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.3);

    div {
        margin: 10px 0 10px 0;
    }

    .title {
        text-transform: uppercase;
        display: block;
        color: #BCF1ED;
    }
}
</style>