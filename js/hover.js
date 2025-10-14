document.addEventListener("DOMContentLoaded", () => {
			const stagesSection = document.querySelector(".stages");
			const stageContents = document.querySelectorAll(".stage-content");
			const originalStyles = [];

			// Сохраняем изначальные стили
			stageContents.forEach(stage => {
				const computedStyle = window.getComputedStyle(stage.parentElement);
				originalStyles.push({
					marginLeft: computedStyle.marginLeft,
					marginTop: computedStyle.marginTop,
					marginBottom: computedStyle.marginBottom,
				});
			});

			stagesSection.addEventListener("mouseenter", () => {
				// Вычисляем позицию первого блока
				const firstStageLeft = stageContents[0].parentElement.getBoundingClientRect().left;

				stageContents.forEach((stage, index) => {
					const parent = stage.parentElement;
					const currentLeft = parent.getBoundingClientRect().left;

					// Вычисляем сдвиг для выравнивания по первому блоку
					const offset = currentLeft - firstStageLeft;
					parent.style.marginLeft = `calc(${originalStyles[index].marginLeft} - ${offset}px)`;
					parent.style.transition = "margin 0.5s ease"; // Плавное выравнивание
					parent.style.marginTop = originalStyles[index].marginTop;
					parent.style.marginBottom = originalStyles[index].marginBottom;
				});
			});

			stagesSection.addEventListener("mouseleave", () => {
				// Восстанавливаем изначальные стили
				stageContents.forEach((stage, index) => {
					const parent = stage.parentElement;
					parent.style.marginLeft = originalStyles[index].marginLeft;
					parent.style.marginTop = originalStyles[index].marginTop;
					parent.style.marginBottom = originalStyles[index].marginBottom;
				});
			});
		});	