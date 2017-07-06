<script> 
    export default function(width, height) {
    
        if (!(this instanceof Shape)) {
            return new Shape(width, height);
        }
    
        this.width = width;
        this.height = height;
    
        return this;
    }
</script>
