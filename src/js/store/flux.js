const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			favorites: [],
			quotes: [
				"You'll Find I'm Full Of Surprises.",
				"R2D2, You Know Better Than To Trust A Strange Computer!",
				"Bleep, Bloop, Beep, Boop, Beep",
				"Be careful not to choke on your aspirations.",
				"Why, you stuck-up, half-witted, scruffy-looking nerf herder!",
				"I'm not stupid, Kenobi. Just because I haven't flown across the galaxy like you have doesn't make me some sort of ignorant hick.",
				"I think my teacher was wrong: making cheese wasn't what I was born to do. I was born to make people feel good when everything around them seemed just awful.",
				"I'm not lazy, I just have a bad motivator",
				"Don't get too cocky, Skyboy.",
				"If you strike me down, I shall become more powerful than you can possibly imagine"
			]
		},
		actions: {
			login: userCredentials => {
				fetch("https://3000-black-junglefowl-nnlldunc.ws-us03.gitpod.io/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						body: JSON.stringify(userCredentials)
					}
				})
					.then(reponse => response.json())
					.then(data => {
						localStorage.setItem("token", data);
					})
					.catch(error => console.log(error));
			},
			deleteButton: i => {
				let store = getStore();
				let updatedList = store.favorites.filter((favorite, index) => index !== i);
				setStore({ favorites: updatedList });
			},
			// Use getActions to call a function within a fuction
			addItem: object => {
				let store = getStore();
				setStore({ favorites: [...store.favorites, object] });
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }))
					.catch(err => console.error(err));
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
