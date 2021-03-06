USE [loko_nw]
GO
/****** Object:  Table [dbo].[RefOperation]    Script Date: 29.12.2020 23:27:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RefOperation](
	[idOperation] [int] IDENTITY(1,1) NOT NULL,
	[Operation] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_RefOperation] PRIMARY KEY CLUSTERED 
(
	[idOperation] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[RefOperation] ON 

INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (1, N'Демонтаж ')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (2, N'Разборка узла')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (3, N'Очистка ')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (4, N'Дефектация ')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (5, N'Проверка крепления')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (6, N'Восстановление ')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (7, N'Ремонт ')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (8, N'Замена узла на новый')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (9, N'Сборка узла')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (10, N'Монтаж ')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (11, N'Измерение зазоров')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (12, N'Измерение температуры')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (13, N'Измерение давления')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (14, N'Сварка конструкций')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (15, N'Смазка элементов')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (16, N'Притирка поверхностей')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (17, N'Регулировка')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (18, N'Замена прокладки')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (19, N'Анализ масла')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (20, N'Анализ топлива')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (21, N'Проверка электрической цепи')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (22, N'Проверка тока зарадки')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (23, N'Проверка сопротивления изоляции')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (24, N'Ремонт крышки циллиндра')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (25, N'Регулировка РЧО')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (26, N'Замена подшипников ТК')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (27, N'Замена масла')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (28, N'Проточка крышки циллиндра')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (29, N'Ремонт клапанной коробки')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (30, N'Опрессовка давлением')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (31, N'Ревизия резьбовых соединений')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (32, N'Замена втулок')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (33, N'Восстановление посадочной поверхности')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (34, N'Восстановление изоляции')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (35, N'Обтяжка клеммных соединений')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (36, N'Проверка щеточного узла')
INSERT [dbo].[RefOperation] ([idOperation], [Operation]) VALUES (37, N'Измерение плотности электролита')
SET IDENTITY_INSERT [dbo].[RefOperation] OFF
