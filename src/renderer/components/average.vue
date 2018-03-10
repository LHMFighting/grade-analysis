<template>
    <div>
        <v-header></v-header>
        <div class="title">平均数</div>
        <div class="average" v-for="(item,key) in averageObj" :key="key">
            {{key}} : {{averageObj[key]}}
        </div>
    </div>
</template>

<script>
import vHeader from './header'
import { mapGetters } from 'vuex'

export default {
    name: 'average',
    data() {
        return {
            averageObj: {}
        }
    },
    components: {
        vHeader
    },
    computed: {
        ...mapGetters(['allGrades'])
    },
    mounted() {
        console.log(this.allGrades)
        console.log('mounted')
        this.allGrades.map((row, index) => {
            this.traverseTree(row)
        })
        console.log(this.averageObj);
    },
    methods: {
        // 遍历单个节点
        traverseNode(node) {
            if (!this.averageObj[node.id]) {
                this.averageObj[node.id] = 0;
            }
            var grade = this.averageObj[node.id] + (node.grade || 0)
            this.averageObj = Object.assign({}, this.averageObj, {
                [node.id]: grade
            })
        },

        // 递归遍历树
        traverseTree(node) {
            if (!node) {
                return;
            }
            this.traverseNode(node);
            if (node.children && node.children.length > 0) {
                var i = 0;
                for (i = 0; i < node.children.length; i++) {
                    this.traverseTree(node.children[i]);
                }
            }
        }
    }
}
</script>

<style lang="postcss" scoped>

</style>

