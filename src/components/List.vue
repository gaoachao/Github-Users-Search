<template>
	<div class="row">
		<div v-show="userInfo.users.length" class="card" v-for="user in userInfo.users" :key="user.login">
			<a :href="user.html_url" traget="_blank">
				<img :src="user.avatar_url" style="width:100px">
			</a>
			<p class="card-text">{{ user.login }}</p>
		</div>
		<h1 v-show="userInfo.isFirst">欢迎使用github用户搜索器</h1>
		<h1 v-show="userInfo.isLoading">不好意思，正在加载中......</h1>
		<h1 v-show="userInfo.errMsg">{{ userInfo.errMsg }}</h1>
	</div>
</template>
<script>
export default {
	name: 'List',
	data() {
		return {
			userInfo: {
				isFirst: true,
				isLoading: false,
				errMsg: '',
				users: [],
			}
		}
	},
	mounted() {
		this.$bus.$on('updateListData', (dataObj) => {
			this.userInfo = {...this.userInfo,...dataObj};
			//合并对象，规则为：两个对象中的属性全部提取出来，如果有相同key不同value以后面那个对象为主
		})
	},
}
</script>
<style scoped>
.album {
	min-height: 50rem;
	/* Can be removed; just added for demo purposes */
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: #f7f7f7;
}

.card {
	float: left;
	width: 33.333%;
	padding: .75rem;
	margin-bottom: 2rem;
	border: 1px solid #efefef;
	text-align: center;
}

.card>img {
	margin-bottom: .75rem;
	border-radius: 100px;
}

.card-text {
	font-size: 85%;
}
</style>