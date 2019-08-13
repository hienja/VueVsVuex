<template>
    <v-container>
        <v-layout row>
            <v-flex>
                <List :list="list"/>
            </v-flex>
            <v-flex>
                <Input @add="onAdd"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import List from './List'
    import Input from './Create'

    export default {
        components: {
            List,
            Input
        },
        props: [ 'list' ],
        methods: {
            onAdd(value) {
                this.$emit('add', value)
            }
        }
    }
</script>
