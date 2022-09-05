export default class PhotoService {

	getImages() {
        return fetch('photo.json').then(res => res.json())
                .then(d => d.data);
    }
}