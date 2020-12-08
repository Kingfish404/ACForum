<template>
    <div id="tabs">
        <b-tabs v-model="技术" multiline="multiline" type="is-boxed">
            <template v-for="tab in tabs">
                <b-tab-item
                    v-if="tab.displayed"
                    :key="tab.catalogName"
                    :value="tab.catalogName"
                    :label="tab.catalogName">
                     <ContainerTable :Topic="tab.topicArr"></ContainerTable>
                </b-tab-item>
            </template>
        </b-tabs>
    </div>
</template>

<script>
import ContainerTable from './ContainerTable'
    export default {
        data() {
            return {
                 
            }
        },
        components: {
            ContainerTable
       },
        computed: {
            baseTabs() {
                return [                    
                    {
                       displayed:true,
                       catalogName: '技术',
                       topicArr:[
                           {
                               name: '用 Python 做数据分析或数据挖掘需要学习并使用“数据结构和算法”相关的知识么？',
                               topicID: '1'
                           },

                           {
                               name: '准备搞个 ARM 芯片的 Linux 平板电脑，有没有人感兴趣？',
                               topicID: '2'
                           },

                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           },
                           {
                               name: '小团队 适合用 k8s +Spring cloud +微服务吗?',
                               topicID: '3'
                           }
                       ]
                    },
                     {
                       displayed:true,
                       catalogName: '创意',
                       topicArr:[
                           {
                               name: '用 Python 做数据分析或数据挖掘需要学习并使用“数据结构和算法”相关的知识么？',
                               topicID: '1'
                           }
                       ]
                    }    
                ]
            },

            tabs() {
                const tabs = [...this.baseTabs]
                return tabs
            }
            
        }
    }
</script>

<style>
#tabs{
    width:50%;
    position:relative;
    left:300px;
    background-color: white;
}

</style>