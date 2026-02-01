// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        navbar.style.backgroundColor = 'rgba(0, 136, 204, 0.95)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        navbar.style.backgroundColor = '#0088cc';
    }
});

// 功能卡片悬停效果增强
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
});

// 下载按钮点击效果
const downloadButton = document.querySelector('.btn-download');
if (downloadButton) {
    downloadButton.addEventListener('click', function(e) {
        // 添加点击动画
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // 滚动到下载区域
        setTimeout(() => {
            const downloadSection = document.querySelector('#download');
            if (downloadSection) {
                window.scrollTo({
                    top: downloadSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }, 300);
    });
}

// 页面加载完成后的处理
document.addEventListener('DOMContentLoaded', function() {
    console.log('Telegram 中文版网站已加载');
    
    // 添加页面加载动画
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }
});

// 表单提交处理（如果有联系表单）
function handleSubmit(event) {
    event.preventDefault();
    alert('感谢您的提交！我们会尽快回复您。');
    event.target.reset();
}