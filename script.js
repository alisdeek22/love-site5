// Generate floating hearts
        function createHearts() {
            const container = document.getElementById('heartsContainer');
            const heartTypes = ['solid', 'outline', 'double'];
            
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
                
                const size = Math.random() * 25 + 15;
                const type = heartTypes[Math.floor(Math.random() * 3)];
                const rotation = Math.random() * 30 - 15;
                
                if (type === 'solid') {
                    heart.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" style="transform: rotate(${rotation}deg); filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">
                        <defs><linearGradient id="hg${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="hsl(350, 75%, 70%)"/>
                            <stop offset="100%" stop-color="hsl(350, 65%, 55%)"/>
                        </linearGradient></defs>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#hg${i})"/>
                    </svg>`;
                } else if (type === 'outline') {
                    heart.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" style="transform: rotate(${rotation}deg);">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="hsl(350, 60%, 60%)" stroke-width="1.5"/>
                    </svg>`;
                } else {
                    heart.innerHTML = `<div style="position: relative; transform: rotate(${rotation}deg);">
                        <svg width="${size}" height="${size}" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="hsl(350, 70%, 65%)" opacity="0.5"/>
                        </svg>
                        <svg width="${size * 0.6}" height="${size * 0.6}" viewBox="0 0 24 24" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="hsl(350, 75%, 55%)"/>
                        </svg>
                    </div>`;
                }
                
                container.appendChild(heart);
            }
        }

        // Generate falling petals
        function createPetals() {
            const container = document.getElementById('petalsContainer');
            
            for (let i = 0; i < 25; i++) {
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.style.left = Math.random() * 100 + '%';
                petal.style.animationDelay = Math.random() * 8 + 's';
                petal.style.animationDuration = (Math.random() * 6 + 8) + 's';
                petal.style.opacity = Math.random() * 0.4 + 0.3;
                
                const size = Math.random() * 15 + 10;
                const rotation = Math.random() * 360;
                
                petal.innerHTML = `<svg width="${size}" height="${size * 1.2}" viewBox="0 0 20 24" style="transform: rotate(${rotation}deg); filter: drop-shadow(0 2px 3px rgba(0,0,0,0.1));">
                    <defs><radialGradient id="pg${i}" cx="30%" cy="30%">
                        <stop offset="0%" stop-color="hsl(350, 80%, 75%)"/>
                        <stop offset="100%" stop-color="hsl(350, 60%, 55%)"/>
                    </radialGradient></defs>
                    <ellipse cx="10" cy="12" rx="8" ry="11" fill="url(#pg${i})"/>
                    <path d="M10 3 Q10 12 10 21" stroke="hsl(350, 50%, 45%)" stroke-width="0.5" fill="none" opacity="0.3"/>
                </svg>`;
                
                container.appendChild(petal);
            }
        }

        // Generate sparkles
        function createSparkles() {
            const container = document.getElementById('sparklesContainer');
            
            for (let i = 0; i < 15; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 3 + 's';
                sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
                sparkle.style.fontSize = (Math.random() * 10 + 8) + 'px';
                sparkle.textContent = '✦';
                container.appendChild(sparkle);
            }
        }

        // Open envelope
        function openEnvelope() {
            document.getElementById('envelopeWrapper').classList.add('hidden');
            document.getElementById('letterContainer').classList.add('show');
        }

        // Close envelope
        function closeEnvelope() {
            document.getElementById('letterContainer').classList.remove('show');
            document.getElementById('envelopeWrapper').classList.remove('hidden');
        }

        // Initialize
        createHearts();
        createPetals();
        createSparkles();