<template>
	<div>
    <!--TODO 路由跳转-->
    <router-link :to="{ path: '/modify', query: { id: -1}}">
      <Button size="large" type="info">新增成员~~</Button>
    </router-link>
    <br><br>
    <Table size="large" width="1101" border :columns="columns7" :data="list"></Table>
    <!--在这里显示用户列表
    要求:
    1. 除了自己之外的用户只能删除
    2. 用户是自己的时候可以修改和删除
    3. 列表页顶部显示新增用户的按钮-->
  </div>
</template>

<style lang="scss">
</style>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

  export default {
    data() {
      return {
        columns7: [
          {
            title: '姓名',
            key: 'name',
            width: 250,
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'social-tux',
                  },
                }),
                h('strong', params.row.name),
              ]);
            },
          },
          {
            title: '性别',
            key: 'sex',
            width: 200,
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'transgender', 
                  },
                }),
                h('strong', params.row.sex),
              ]);
            },
          },
          {
            title: '地址',
            key: 'address',
            width: 350,
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'ios-home-outline',
                  },
                }),
                h('strong', params.row.address),
              ]);
            },
          },
          {
            title: '操作',
            key: 'action',
            width: 300,
            align: 'center',
            render: (h, params) => {
              const deleteFunction = h('Button', {
                    props: {
                      type: 'error',
                      size: 'default',
                    },
                    on: {
                      click: () => {
                        this.remove(params.index);
                      },
                    },
                  }, '删除');
              const functionArr = [
                h('Button', {
                    props: {
                      type: 'success',
                      size: 'default',
                    },
                    style: {
                      marginRight: '5px',
                    },
                    on: {
                      click: () => {
                        this.show(params.index);
                      },
                    },
                  }, '查看'), 
                h('Button', {
                    props: {
                      type: 'warning',
                      size: 'default',
                    },
                    style: {
                      marginRight: '5px',
                    },
                    on: {
                      click: () => {
                        this.revise(params.index);
                      },
                    },
                  }, '修改')];
              if (params.row.self) functionArr.push(deleteFunction);
              return h('div', functionArr); 
            },
          },
        ],
      };
    },
    methods: {
      show(index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.list[index].name}<br>性别：${this.list[index].sex}<br>地址：${this.list[index].address}`,
        });
      },
      revise(index) {
        this.$router.push({
          name: 'modify',
          query: { id: this.list[index].id },
        });
      },
      remove(index) {
        if (confirm(`确定要删除${this.list[index].name}吗?`)) {
          this.list.splice(index, 1);
        }
      },
    },
    computed: {
      // TODO 获得vuex中的数据
      ...mapGetters({
        list: 'list',
      }),
    },
  };
</script>
