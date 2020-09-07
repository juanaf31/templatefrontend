export default function() {
	return [
		{
			title: 'Dashboard',
			to: '/dashboardindex',
			htmlBefore: '<i class="material-icons">dashboard</i>',
			htmlAfter: ''
		},
		// {
		// 	title: 'Blog Posts',
		// 	htmlBefore: '<i class="material-icons">vertical_split</i>',
		// 	to: '/blog-posts'
		// },
		// {
		// 	title: 'Add New Post',
		// 	htmlBefore: '<i class="material-icons">note_add</i>',
		// 	to: '/add-new-post'
		// },
		// {
		// 	title: 'Forms & Components',
		// 	htmlBefore: '<i class="material-icons">view_module</i>',
		// 	to: '/components-overview'
		// },
		{
			title: 'Tables',
			htmlBefore: '<i class="material-icons">table_chart</i>',
			to: '/tables'
		},
		{
			title: 'Reports',
			htmlBefore: '<i class="material-icons">table_chart</i>',
			to: '/reports'
		},
		{
			title: 'Profile',
			htmlBefore: '<i class="material-icons">person</i>',
			to: '/user-profile-lite'
		}
		// ,
		// {
		// 	title: 'Errors',
		// 	htmlBefore: '<i class="material-icons">error</i>',
		// 	to: '/errors'
		// }
	];
}
