USE [loko_nw]
GO
/****** Object:  Table [dbo].[TabRepairs]    Script Date: 29.12.2020 23:27:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TabRepairs](
	[idRepair] [int] IDENTITY(1,1) NOT NULL,
	[IDNumLoko] [int] NOT NULL,
	[DateTimeStartRepair] [datetime] NOT NULL,
	[DateTimeEndRepair] [datetime] NULL,
 CONSTRAINT [PK_TabRepairs] PRIMARY KEY CLUSTERED 
(
	[idRepair] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[TabRepairs] ON 

INSERT [dbo].[TabRepairs] ([idRepair], [IDNumLoko], [DateTimeStartRepair], [DateTimeEndRepair]) VALUES (1, 1, CAST(N'2020-10-01T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[TabRepairs] ([idRepair], [IDNumLoko], [DateTimeStartRepair], [DateTimeEndRepair]) VALUES (2, 2, CAST(N'2020-11-02T00:00:00.000' AS DateTime), CAST(N'2020-12-05T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[TabRepairs] OFF
ALTER TABLE [dbo].[TabRepairs]  WITH CHECK ADD  CONSTRAINT [FK_TabRepairs_RefNumLoko] FOREIGN KEY([IDNumLoko])
REFERENCES [dbo].[RefNumLoko] ([idNumLoko])
GO
ALTER TABLE [dbo].[TabRepairs] CHECK CONSTRAINT [FK_TabRepairs_RefNumLoko]
GO
