class CelestialArtifact{
    // All CelestialArtifacts must have an imageSrc and a unique ID
    constructor(id, imageSrc){
        if (new.target === CelestialArtifact){
            throw new TypeError("Cannot construct abstract base class CelestialArtifact directly");
        }
        this.id = id;
        this.imageSrc = imageSrc;
    }

    // All inheritents may overwrite this function
    interact(){}
}
