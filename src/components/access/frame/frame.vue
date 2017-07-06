<script> 
    export default function() {
    
        if (!(this instanceof Shape)) {
            return new Shape(width, height);
        }
    
        this.width = width;
        this.height = height;
    
        return this;
    }
</script>
