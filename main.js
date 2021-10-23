// Minhas redes sociais

const socialMedia = {
	github: 'jrgessiel',
	youtube: '',
	instagram: 'jrgessiel',
	facebook: 'gessiel.junior.7',
	twitter: 'jrgessiel'
}

// Adiciona os dados acima nas redes sociais

function changeSocialMedia() {
	for (let list of socialMediaLi.children) {
		const social = list.getAttribute('class');

		list.children[0].href = `https://${social}.com/${socialMedia[social]}`;
	}
}

function getGitHubProfile(){
	const url = `https://api.github.com/users/${socialMedia.github}`

	fetch(url).then(response => response.json())
	.then(data => {
		username.textContent = data.name;
	  bio.textContent = data.bio;
	  userProfile.href = data.html_url;
	  userProfilePhoto.src = data.avatar_url;
	  userProfileName.textContent= data.login;
	})

}

changeSocialMedia();
getGitHubProfile();
