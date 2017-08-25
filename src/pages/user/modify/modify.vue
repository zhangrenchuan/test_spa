<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <Form-item label="姓名" prop="name">
      <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
    </Form-item>
    <Form-item label="性别" prop="sex">
      <Select v-model="formValidate.sex" placeholder="请选择性别">
        <Option value="男">男</Option>
        <Option value="女">女</Option>
      </Select>
    </Form-item>
    <Form-item label="地址" prop="address">
      <Input v-model="formValidate.address" placeholder="请输入地址"></Input>
    </Form-item>
    <Form-item>
      <Button type="primary" @click="handleSubmit(formValidate)">提交</Button>
      <router-link to="/list"><Button type="ghost" style="margin-left: 8px">返回</Button></router-link>
    </Form-item>
  </Form>
</template>

<style lang="scss">
</style>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        formValidate: {
          name: '',
          sex: '',
          address: '',
        },
        ruleValidate: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' },
          ],
          sex: [
            { required: true, message: '性别不能为空', trigger: 'blur' },
          ],
          address: [
            { required: true, message: '地址不能为空', trigger: 'blur' },
          ],
        },
      };
    },
    mounted() {
      const targetId = this.$route.query.id;
      if (targetId > 0) {
        const targetItem = this.list.filter(item => {
          return Number(item.id) === Number(targetId);
        });
        console.log(targetItem);
        this.formValidate.name = targetItem[0].name;
        this.formValidate.sex = targetItem[0].sex;
        this.formValidate.address = targetItem[0].address;
      }
    },
    methods: {
      ...mapActions([
        'userlist',
      ]),
      handleSubmit(list) {
        console.log(list);
        this.$store.dispatch('userlist', {
          list,
          userId: this.$route.query.id,
        });
        this.$router.push({
          name: 'list',
        });
      },
    },
    computed: {
      ...mapGetters({
        list: 'list',
      }),
    },
  };
</script>
