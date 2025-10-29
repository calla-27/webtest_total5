document.addEventListener('DOMContentLoaded', function() {
    // 获取所有卡片元素
    const cards = document.querySelectorAll('.card');
    
    // 为每个卡片添加点击事件
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // 获取卡片中存储的URL
            const url = this.getAttribute('data-url');
            
            // 在新标签页中打开URL
            if (url) {
                window.open(url, '_blank');
            }
        });
        
        // 添加鼠标悬停时的微动画
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 添加键盘导航支持
    document.addEventListener('keydown', function(event) {
        // 如果按下回车键或空格键且焦点在卡片上
        if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('card')) {
            event.preventDefault();
            const url = event.target.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        }
    });
    
    // 添加卡片聚焦时的视觉反馈
    cards.forEach(card => {
        card.addEventListener('focus', function() {
            this.style.outline = '2px solid #3498db';
            this.style.outlineOffset = '2px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});