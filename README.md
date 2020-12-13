# Firebase-Chat
A basic chat app based on Firebase

Based on a [Google Firebase tutorial](https://codelabs.developers.google.com/codelabs/firebase-web#1), [starter code](https://github.com/firebase/codelab-friendlychat-web) and [Tutorial part 2](https://codelabs.developers.google.com/codelabs/firebase-cloud-functions?hl=en#0) (Friendly Chat).

## Instructions and notes

Run Firebase app locally:
```shell
firebase serve --only hosting
```

With local server running, configuration files with app details like URLs are inspectable, e.g. by visiting:
```shell
http://localhost:5000/__/firebase/init.js
```

Deploy webpage(s) and open deployed site:
```shell
firebase deploy --except functions
firebase open hosting:site
```

## Cloud Vision API
For details see [Cloud Vision API chapter](https://codelabs.developers.google.com/codelabs/firebase-cloud-functions?hl=en#8) of basic tutorial.
## License
See [LICENSE](LICENSE)
Basically a derivative work from a Google tutorial under Apache license.