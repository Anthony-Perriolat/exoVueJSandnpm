const post = { title : "salut", tags: ['actu', 'tech'], user: {name: "monuser"} }

let [title,name,secondTag] = [post.title,post.user.name,post.tags[1]];

console.log(title)
console.log(name)
console.log(secondTag)


