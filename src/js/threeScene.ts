import * as THREE from "three";

try {
    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1d1d1f);

    // Create camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    
    // Create a container for the scene (optional)
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.zIndex = "-1";
    container.style.pointerEvents = "none";
    container.appendChild(renderer.domElement);
    document.body.appendChild(container);

    // Create cube with gradient material
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({
        color: 0x0071e3,
        emissive: 0x0050a0,
        shininess: 100,
        wireframe: false
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    // Add multiple lights for better effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff6b9d, 1);
    pointLight1.position.set(5, 5, 5);
    pointLight1.castShadow = true;
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00d9ff, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Animation variables
    let animationId: number;
    let rotationSpeed = 0.002;

    // Animation loop
    function animate() {
        animationId = requestAnimationFrame(animate);

        // Rotate cube
        cube.rotation.x += rotationSpeed;
        cube.rotation.y += rotationSpeed * 1.5;
        cube.rotation.z += rotationSpeed * 0.5;

        // Subtle pulse effect
        const time = Date.now() * 0.001;
        cube.scale.x = 1 + Math.sin(time) * 0.05;
        cube.scale.y = 1 + Math.cos(time) * 0.05;
        cube.scale.z = 1 + Math.sin(time * 1.5) * 0.05;

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Speed up rotation on scroll
    let scrollTimeout: NodeJS.Timeout;
    window.addEventListener("scroll", () => {
        rotationSpeed = 0.005;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            rotationSpeed = 0.002;
        }, 2000);
    });

    // Cleanup on page unload
    window.addEventListener("beforeunload", () => {
        cancelAnimationFrame(animationId);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        window.removeEventListener("resize", handleResize);
    });

    console.log("✨ Three.js scene initialized!");

} catch (error) {
    console.warn("Three.js scene failed to initialize (optional):", error);
}
