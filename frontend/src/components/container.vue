<template>
    <div id="Tabs" class="inner">
        <b-tabs v-model="技术" multiline="multiline" type="is-boxed">
            <template v-for="tab in tabs">
                <b-tab-item id="table_item"
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
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'1',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                            {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'2',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                            {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'3',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                            {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'4',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                            {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'5',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                            {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'6',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                            {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'7',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                           {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'7',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                           {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'7',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                           {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'7',
                               username: 'wk',
                               data:'2020-12-8'
                           },
                           {
                               title:'自用了一年多的 JetBrains IDE',
                               topicID:'7',
                               username: 'wk',
                               data:'2020-12-8'
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

#Tabs {
    background-color: var(--box-background-color);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

.inner {
    padding: 10px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
}

#table_item{
    padding:0px;
    background-color: var(--box-background-color);
    border-radius: var(--box-border-radius);
    box-shadow: 3px 2px 3px 2px rgba(0,0,0,.1);
    border-bottom: 1px solid var(--box-border-color);
    border-top: 1px solid var(--box-border-color);
}
</style>