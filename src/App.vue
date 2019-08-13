<template>
    <v-app>
        <v-content>
            <Todo :list="list" @add="addToList"/>
        </v-content>
        <v-content>
            <Display :list="list"/>
        </v-content>
    </v-app>
</template>

<script>
    import Todo from './components/todo/App';
    import Display from './components/display/App'

    export default {
        name: 'App',
        components: {
            Todo,
            Display,
        },
        data: () => ({
            list: ['Drink Protein']
        }),
        methods: {
            addToList(value) {
                this.list.push(value)
            }
        }
    };
</script>
